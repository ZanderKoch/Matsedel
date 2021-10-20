package nu.te4.matsedel.resources;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;
import Web_Scraping.Web_Scraping;
import java.text.ParseException;

/**
 *
 * @author 
 */
@Path("test")
public class JavaEE8Resource {
    
    @GET
    public Response ping() throws ParseException{
        
        return Response
                .ok(new Web_Scraping().scraping())
                .build();
    }
}
