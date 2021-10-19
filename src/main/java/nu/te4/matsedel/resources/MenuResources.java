/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nu.te4.matsedel.resources;

import java.util.List;
import javax.ejb.EJB;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import nu.te4.matsedel.beans.MenuBeans;
import nu.te4.menu.entities.Menu;

/**
 *
 * @author Elev
 */
@Path("menu")
@Produces(MediaType.APPLICATION_JSON)
public class MenuResources {
    @EJB
    MenuBeans menuBean;
    
    @GET
    public Response getMenu(){
        List<Menu> menu = menuBean.getMenu();
        if(menu.size() > 0){
            return Response.ok(menu).build();
        }
        else{
            return Response.noContent().build();
        }
    }
}
