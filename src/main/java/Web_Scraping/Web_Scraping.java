/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Web_Scraping;

import java.io.IOException;
import java.text.ParseException;
import java.util.ArrayList;
import java.sql.Date;
import java.util.List;
import nu.te4.menu.entities.Menu;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

/**
 *
 * @author Patrick Kulevski
 */
public class Web_Scraping {
    
    public List<Menu> scraping() throws ParseException{
        List<Menu> stuff = new ArrayList<>();
        try{
            Document doc = Jsoup.connect("https://mpi.mashie.com/public/app/V%C3%A4xj%C3%B6%20kommun%20ny/6f5fa240").get(); // vilken sida vi webbskrapar information från
               Elements week = doc.select("div.panel-group"); //div för hela menyn
               
               for(int i = 0;i < 5;i++){
                Element day = week.select(".panel").get(i); // hämtar information från html klassen panel som är dagvis
                String månad = "0"; //ger defaultvärde
                String str = day.select("div.pull-right").get(0).html(); // hämtar datumen från sidan med html klassen pull-right
                String[] arrOfStr = str.split(" "); //delar en sträng med split

                switch(arrOfStr[1]){ //kollar vilken case som matchar från listan och skriver sedan ut korrekt 
                    case("jan" ): 
                        månad = "01";
                    break;
                    case("feb"): 
                        månad = "02";
                    break;
                    case("mar"): 
                        månad = "03";
                    break;
                    case("apr"): 
                        månad = "04";
                    break;
                    case("maj"): 
                        månad = "05";
                    break;
                    case("jun"): 
                        månad = "06";
                    break;
                    case("jul"): 
                        månad = "07";
                    break;
                    case("aug"): 
                        månad = "08";
                    break;
                    case("sep"): 
                        månad = "09";
                    break;
                    case("okt"): 
                        månad = "10";
                    break;
                    case("nov"): 
                        månad = "11";
                    break;
                    case("dec"): 
                        månad = "12";
                    break;                    
                }
                
                String date1 = "2021" + "-" + månad + "-" + arrOfStr[0]; //skriver ut korrekt formatering av datum tex 2021-10-20 beroende vad den får från lsitan
                Date mån= Date.valueOf(date1);//new SimpleDateFormat("yyyy-MM-dd").parse(date1);
                Menu dish1 = new Menu();
                Menu dish2 = new Menu();
                dish1.setServing_date(mån);
                dish2.setServing_date(mån);
                
                dish1.setDescription(day.select("div.app-daymenu-name").get(0).html());
                dish2.setDescription(day.select("div.app-daymenu-name").get(1).html()); //description 2
                stuff.add(dish1); 
                stuff.add(dish2); 
                
               } 
        }
        catch(IOException ex){
            System.out.println("Error fetching document!");
            return null;
        }   
        return stuff;
   }
}
