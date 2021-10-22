/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nu.te4.matsedel.resources;

import javax.ejb.EJB;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import nu.te4.matsedel.beans.MenuBeans;
import nu.te4.menu.entities.Menu;

/**
 *
 * @author Patrick Kulevski
 */
@Path("menu")
@Produces(MediaType.APPLICATION_JSON)
public class MenuResources {
    @EJB
    MenuBeans menuBean;
    
    @GET
    public Response getMenu(){
       return menuBean.getMenu();
    }
    

}
