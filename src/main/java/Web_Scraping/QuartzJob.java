/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Web_Scraping;

import java.sql.Connection;
import java.sql.Date;
import java.util.List;
import nu.te4.matsedel.ConnectionFactory;
import nu.te4.matsedel.beans.MenuBeans;
import nu.te4.menu.entities.Menu;
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
        try(Connection con = ConnectionFactory.getConnection()){
            List<Menu> dishes = new Web_Scraping().scraping(); //jobbet anropar webb skrapningen så att dne kan följa schemat
            System.out.println("Posting dishes");
            MenuBeans menuBean = new MenuBeans();
            for(Menu dish: dishes){
                menuBean.postMenu(dish);
            }
            
        }catch(Exception e){
            System.out.println("Error QuartzJob: "+e.getMessage());
        }
    }
}
