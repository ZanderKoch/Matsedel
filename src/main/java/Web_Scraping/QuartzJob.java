/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Web_Scraping;

import java.util.List;
import org.quartz.Job;
import org.quartz.JobExecutionContext;
import org.quartz.JobExecutionException;


/**
 *
 * @author Elev
 */
public class QuartzJob implements Job{
    
    @Override
    public void execute(JobExecutionContext jec) throws JobExecutionException {
        try{
            List<String> dishes = new Web_Scraping().scraping();
            System.out.println(dishes);
        }catch(Exception e){
            
        }
    }
}
