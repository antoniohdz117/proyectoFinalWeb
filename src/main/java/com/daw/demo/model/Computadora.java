package com.daw.demo.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "computadora")
public class Computadora {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idComputadora;
    private String direccion;
    private int numeroExterior;
    private int numeroInterior;
    private String delegacion;
    private LocalDate fechaPedido;
    private LocalDate fechaEntrega;

    public Computadora(int idComputadora, String direccion, LocalDate fechaPedido, LocalDate fechaEntrega) {
        this.idComputadora = idComputadora;
        this.direccion = direccion;
        this.fechaPedido = fechaPedido;
        this.fechaEntrega = fechaEntrega;

    }


    @ManyToOne
    @JoinColumn(name = "idFormaPago")
    private FormaPago formaPago;

    @ManyToOne
    @JoinColumn(name = "idUsuario")
    private Usuario usuario;

    @OneToMany(mappedBy = "Computadora", cascade = CascadeType.ALL)
    private List<ComputadoraxComponente> componentes;

    public Computadora() {

    }

    public int getIdComputadora() {
        return idComputadora;
    }

    public void setIdComputadora(int idComputadora) {
        this.idComputadora = idComputadora;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public int getNumeroExterior() {
        return numeroExterior;
    }

    public void setNumeroExterior(int numeroExterior) {
        this.numeroExterior = numeroExterior;
    }

    public int getNumeroInterior() {
        return numeroInterior;
    }

    public void setNumeroInterior(int numeroInterior) {
        this.numeroInterior = numeroInterior;
    }

    public String getDelegacion() {
        return delegacion;
    }

    public void setDelegacion(String delegacion) {
        this.delegacion = delegacion;
    }

    public LocalDate getFechaPedido() {
        return fechaPedido;
    }

    public void setFechaPedido(LocalDate fechaPedido) {
        this.fechaPedido = fechaPedido;
    }

    public LocalDate getFechaEntrega() {
        return fechaEntrega;
    }

    public void setFechaEntrega(LocalDate fechaEntrega) {
        this.fechaEntrega = fechaEntrega;
    }

    public FormaPago getFormaPago() {
        return formaPago;
    }

    public void setFormaPago(FormaPago formaPago) {
        this.formaPago = formaPago;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public List<ComputadoraxComponente> getComponentes() {
        return componentes;
    }

    public void setComponentes(List<ComputadoraxComponente> componentes) {
        this.componentes = componentes;
    }
}
