package com.daw.demo.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "componente")
public class Componente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idComponente;
    private String nombre;
    private float precio;
    private String descripcion;
    private String marca;
    private int stock;

    public Componente(int id, String nombre, float precio, String descripcion, String marca, int stock) {
        this.idComponente = id;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.marca = marca;
        this.stock = stock;

    }
    @ManyToOne
    @JoinColumn(name = "idCategoria")
    private Categoria categoria;

    @OneToMany(mappedBy = "component", cascade = CascadeType.ALL)
    private List<ComputadoraxComponente> computadoras;

    public Componente() {

    }

    public int getId() {
        return idComponente;
    }

    public void setId(int id) {
        this.idComponente = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getMarca() {
        return marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public List<ComputadoraxComponente> getComputadoras() {
        return computadoras;
    }

    public void setComputadoras(List<ComputadoraxComponente> computadoras) {
        this.computadoras = computadoras;
    }
}
