/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nu.te4.menu.webb_scraping;

/**
 *
 * @author Elev
 */
public class Webb_scraping {
    
     public static void main(String[] args) {
         try{
              Document doc = Jsoup.connect("https://mpi.mashie.com/public/app/V%C3%A4xj%C3%B6%20kommun%20ny/6f5fa240").get();
         }
     }
}
