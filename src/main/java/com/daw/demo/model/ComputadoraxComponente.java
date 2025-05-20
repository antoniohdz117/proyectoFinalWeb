package com.daw.demo.model;

import jakarta.persistence.*;

@Entity
@Table (name = "computadoraxcomponente")
public class ComputadoraxComponente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idComputadoraxComponente;

    @ManyToOne
    @JoinColumn(name = "idComputadora")
    private Computadora computadora;

    @ManyToOne
    @JoinColumn(name = "idComponente")
    private Componente componente;

    public ComputadoraxComponente(int id, Computadora computadora, Componente componente) {
        this.idComputadoraxComponente = id;
        this.computadora = computadora;
    }
    private int cantidad;

    public ComputadoraxComponente() {

    }


    public int getIdComputadoraxComponente() {
        return idComputadoraxComponente;
    }

    public void setIdComputadoraxComponente(int idComputadoraxComponente) {
        this.idComputadoraxComponente = idComputadoraxComponente;
    }

    public Computadora getComputadora() {
        return computadora;
    }

    public void setComputadora(Computadora computadora) {
        this.computadora = computadora;
    }

    public Componente getComponente() {
        return componente;
    }

    public void setComponente(Componente componente) {
        this.componente = componente;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }
}
