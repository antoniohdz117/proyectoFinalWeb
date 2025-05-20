package com.daw.demo.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "categoria")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idCategoria;
    private String categoria;

    //inicializamos las clases para poder hacer las insercciones
    public Categoria(int idCategoria, String categoria) {
        this.idCategoria = idCategoria;
        this.categoria = categoria;

    }



    @OneToMany(mappedBy = "categoria")
    private List<Componente> componente;

    public Categoria() {

    }

    public int getIdCategoria() {
        return idCategoria;
    }

    public void setIdCategoria(int idCategoria) {
        this.idCategoria = idCategoria;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public List<Componente> getComponente() {
        return componente;
    }

    public void setComponente(List<Componente> componente) {
        this.componente = componente;
    }
}
