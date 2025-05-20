package com.daw.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name= "Codigo")
public class Codigo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idCodigo;
    private String codigo;
    private String colonia;

    public Codigo(int idCodigo, String codigo, String colonia) {
        this.idCodigo = idCodigo;
        this.codigo = codigo;
        this.colonia = colonia;
    }

    public Codigo() {

    }


    public int getIdCodigo() {
        return idCodigo;
    }

    public void setIdCodigo(int idCodigo) {
        this.idCodigo = idCodigo;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public String getColonia() {
        return colonia;
    }

    public void setColonia(String colonia) {
        this.colonia = colonia;
    }
}
