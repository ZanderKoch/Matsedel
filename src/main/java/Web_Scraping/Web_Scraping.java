/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Web_Scraping;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

/**
 *
 * @author Elev
 */
public class Web_Scraping {
    
    public List<String> scraping() throws ParseException{
        List<String> stuff = new ArrayList<>();
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
                
                String date1 ="2021" +"-"+ månad+"-" + arrOfStr[0]; //skriver ut korrekt formatering av datum tex 2021-10-20 beroende vad den får från lsitan
                Date mån= new SimpleDateFormat("yyyy-MM-dd").parse(date1);
                stuff.add(date1); 
                
                stuff.add(day.select("div.app-daymenu-name").get(0).html());
                    
                stuff.add(day.select("div.app-daymenu-name").get(1).html());
               }
        }
        catch(IOException ex){
            stuff.add("Error fetching focument!");
        }   
        return stuff;
   }
}
