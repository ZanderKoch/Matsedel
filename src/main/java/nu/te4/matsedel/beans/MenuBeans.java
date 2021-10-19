/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nu.te4.matsedel.beans;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import javax.ejb.Stateless;
import nu.te4.matsedel.ConnectionFactory;
import nu.te4.menu.entities.Menu;

/**
 *
 * @author Elev
 */ 
@Stateless
public class MenuBeans {
    
    public List<Menu> getMenu(){
        List<Menu> menuList = new ArrayList<>();
        try(Connection con = ConnectionFactory.getConnection()){
            PreparedStatement stmt = con.prepareStatement("SELECT * FROM menu");
            ResultSet result = stmt.executeQuery();
            while(result.next()){
                String description = result.getString("description");
                Date serving_date = result.getDate("serving_date");
                Menu menu = new Menu (description, serving_date);
                menuList.add(menu);
            }
        }
        catch(Exception e){
            System.out.println("menuBean.getMenu: " + e.getMessage());
        }
        return menuList;
    }
}
