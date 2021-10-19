/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package nu.te4.matsedel;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author Elev
 */
public class ConnectionFactory {
    public static Connection getConnection() throws ClassNotFoundException, SQLException{
        String user = "root";
        String password = "";
        String url = "jdbc:mysql://localhost/menu_db";
        Class.forName("com.mysql.jdbc.Driver");
        return (Connection)DriverManager.getConnection(url, user, password);
    }
}
