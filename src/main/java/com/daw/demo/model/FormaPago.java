package com.daw.demo.model;


import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "formaPago")
public class FormaPago {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idFormaPago;
    private String nombreTitular;
    private int numero;
    private LocalDate expiracion;
    private int cvv;

    @OneToMany(mappedBy = "formaPago")
    private List<Computadora> computadoras;

    public FormaPago(int idFormaPago, String nombreTitular, int numero, LocalDate expiracion, int cvv) {
        this.idFormaPago = idFormaPago;
        this.nombreTitular = nombreTitular;
        this.numero = numero;
        this.expiracion = expiracion;
        this.cvv = cvv;
    }

    public FormaPago() {

    }

    public int getIdFormaPago() {
        return idFormaPago;
    }

    public void setIdFormaPago(int idFormaPago) {
        this.idFormaPago = idFormaPago;
    }

    public String getNombreTitular() {
        return nombreTitular;
    }

    public void setNombreTitular(String nombreTitular) {
        this.nombreTitular = nombreTitular;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int numero) {
        this.numero = numero;
    }

    public LocalDate getExpiracion() {
        return expiracion;
    }

    public void setExpiracion(LocalDate expiracion) {
        this.expiracion = expiracion;
    }

    public int getCvv() {
        return cvv;
    }

    public void setCvv(int cvv) {
        this.cvv = cvv;
    }

    public List<Computadora> getComputadoras() {
        return computadoras;
    }

    public void setComputadoras(List<Computadora> computadoras) {
        this.computadoras = computadoras;
    }
}