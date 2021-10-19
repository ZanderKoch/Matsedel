/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nu.te4.menu.entities;

import java.sql.Date;

/**
 *
 * @author Elev
 */
public class Menu {
    
    private Date serving_date;
    private String description;
    
    public Menu(){
        
    }
    
    public Menu(String description, Date serving_date){
        this.description = description;
        this.serving_date = serving_date;
    }
    
    public String getDescription(){
        return description;
    }
    public void setDescription(String description){
        this.description = description;
    }
    
    public Date getServing_date(){
        return serving_date;
    }
    public void serServing_date(Date serving_date){
        this.serving_date = serving_date;
    }
    
}
