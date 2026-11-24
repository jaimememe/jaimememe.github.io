package app;
import javax.swing.*;

public class Main {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            JFrame ventana = new JFrame("Hola Swing");
            JButton boton = new JButton("Haz clic");
            boton.addActionListener(e -> JOptionPane.showMessageDialog(ventana, "¡Funciona!"));
            ventana.add(boton);
            ventana.setSize(300, 200);
            ventana.setLocationRelativeTo(null);
            ventana.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            ventana.setVisible(true);
        });
    }
}