package vn.codegym.bookstore_api.controller;

import java.util.Scanner;

public class DecimalToOcta {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Input your decimal number:");
        int decimalNumber = Integer.parseInt(scanner.nextLine());
        int octaNumber = 0;
        int p = 0;
        while (decimalNumber != 0) {
            int temp = decimalNumber % 8;
            octaNumber += temp * Math.pow(10, p);
            p++;
            decimalNumber /= 8;
        }

        System.out.println("Octa number is: " + octaNumber);
    }
}
