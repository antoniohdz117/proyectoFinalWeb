package com.daw.demo.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "rol")
public class Rol {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idRol;
    private String tipoRol;

    public Rol(int idRol, String tipoRol) {
        this.idRol = idRol;
        this.tipoRol = tipoRol;
    }


    @OneToMany(mappedBy = "rol", cascade = CascadeType.ALL)
    private List<Usuario> usuarios;

    public Rol() {

    }

    public int getIdRol() {
        return idRol;
    }

    public void setIdRol(int idRol) {
        this.idRol = idRol;
    }

    public String getTipoRol() {
        return tipoRol;
    }

    public void setTipoRol(String tipoRol) {
        this.tipoRol = tipoRol;
    }

    public List<Usuario> getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(List<Usuario> usuarios) {
        this.usuarios = usuarios;
    }
}
