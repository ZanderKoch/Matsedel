/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nu.te4.matsedel.beans;

import com.mysql.jdbc.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import javax.ejb.Stateless;
import javax.ws.rs.core.Response;
import nu.te4.matsedel.ConnectionFactory;
import nu.te4.menu.entities.Menu;

/**
 *
 * @author Patrick Kulevski
 */ 
@Stateless
public class MenuBeans {
    
    public Response getMenu(){
        List<Menu> menuList = new ArrayList<>();
        try(Connection con = ConnectionFactory.getConnection()){
            PreparedStatement stmt = con.prepareStatement("SELECT * FROM menu WHERE serving_date LIKE '20%-%-%' ORDER BY serving_date ASC");
            ResultSet result = stmt.executeQuery();
            while(result.next()){
                String description = result.getString("description");
                Date serving_date = result.getDate("serving_date");
                Menu menu = new Menu (description, serving_date);
                menuList.add(menu);
            }
            if(!menuList.isEmpty()){
                return Response.status(Response.Status.OK).entity(menuList).build();
            }else {
                return Response.status(Response.Status.NO_CONTENT).entity(menuList).build();
            }
        }
        catch(Exception e){
            System.out.println("menuBean.getMenu: " + e.getMessage());
            return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
    }
    
    public void postMenu(List<Menu> dishes){
        boolean success = false;
         try(Connection con = ConnectionFactory.getConnection()){
            PreparedStatement st = con.prepareStatement("DELETE FROM menu;");
            PreparedStatement stm = con.prepareStatement("TRUNCATE TABLE menu");
            PreparedStatement stmt = con.prepareStatement("INSERT INTO menu(serving_date, description) VALUES(?,?)");
            st.execute();
            stm.execute();
            for(Menu dish: dishes){
            stmt.setDate(1, dish.getServing_date());
            stmt.setString(2, dish.getDescription());
            success = stmt.executeUpdate() > 0;
            }
        }
        catch(Exception e){
            System.out.println("MenuBeans.postmenus: " + e.getMessage());
        }
    }
}
