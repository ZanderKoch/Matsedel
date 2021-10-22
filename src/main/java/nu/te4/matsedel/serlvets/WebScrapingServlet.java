/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nu.te4.matsedel.serlvets;

import Web_Scraping.QuartzJob;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import org.quartz.CronScheduleBuilder;
import org.quartz.JobBuilder;
import org.quartz.JobDetail;
import org.quartz.Scheduler;
import org.quartz.Trigger;
import org.quartz.TriggerBuilder;
import org.quartz.impl.StdSchedulerFactory;



/**
 *
 * @author Patrick Kulevski
 */
public class WebScrapingServlet implements ServletContextListener{
    @Override
    public void contextInitialized(final ServletContextEvent servletContextEvent) {
        try{
        JobDetail job = JobBuilder.newJob(QuartzJob.class).build();
        Trigger crontrigger = TriggerBuilder.newTrigger().withIdentity("CronTrigger")
                .withSchedule(CronScheduleBuilder.cronSchedule("0 0/1 * 1/1 * ? *")).build(); // schemalagt att webbskrapa 1 gång varje minut
        Scheduler scheduler = StdSchedulerFactory.getDefaultScheduler();
        scheduler.start();
        scheduler.scheduleJob(job, crontrigger);
    
        }catch(Exception ex){
            Logger.getLogger(QuartzJob.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    @Override    
   public void contextDestroyed(final ServletContextEvent servletContextEvent) {
      // Context shutdown
      
   }

    
    
}
