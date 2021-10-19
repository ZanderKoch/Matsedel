/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Web_Scraping;

import java.io.IOException;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;

/**
 *
 * @author Elev
 */
public class Web_Scraping {
    
    public void scraping(String[] args){
        try{
            Document doc = Jsoup.connect("https://m.imdb.com/title/tt2527338/").get();
            Elements body = doc.select("h1");
           // for(Element h1){ //for loop för att få ut bilder och title
             //   String title = h1.select("h1").get(0).html();// tar första title
                //String imgSRC = tr.select("td.posterColumn img").get(0).attr("src"); //väljer ut alla bilder som ligger innanför td taggar och img
              //  saveImg(imgSRC, title);// sparar img och title
              System.out.println("Title");
               System.out.println(body.get(0).html());
               System.out.println("");
               
               Elements listItems = doc.select("li.ipc-inline-list__item");
               System.out.println("Year");
               System.out.println(listItems.get(0).select("a").get(0).html());
               System.out.println("");
               
               Elements genre = doc.select("div.ipc-metadata-list-item__content-container");
                System.out.println("Genre");
                System.out.println(genre.get(12).select("ul li a").get(0).html());
                System.out.println(genre.get(12).select("ul li a").get(1).html());
                System.out.println(genre.get(12).select("ul li a").get(2).html());
                System.out.println(genre.get(12).select("ul li a").get(3).html());
                System.out.println("");
               
                Elements stars = doc.select("div.ipc-metadata-list-item__content-container");
                System.out.println("Stars");
                   System.out.println(stars.get(5).select("ul li a").get(0).html());
                   System.out.println(stars.get(5).select("ul li a").get(1).html());
                   System.out.println(stars.get(5).select("ul li a").get(2).html());
                   System.out.println("");
            //}
        }
        catch(IOException ex){
            System.out.println("Error fetching focument!");
        }   
   }
}
