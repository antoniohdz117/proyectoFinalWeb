package com.daw.demo.controller;

import com.daw.demo.model.Rol;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//Falta definir rutas
@RequestMapping("/apli/roles")


public class RolController {

    private Rol rol;

    public RolController(Rol rol) {

        this.rol = rol;
    }

    @GetMapping
    public List<Rol> getRol(Rol rol) {
        return rol.findAll();
    }

    @PostMapping
    public Rol createRol(@RequestBody Rol rol) {
        return rol.save(rol);
    }



}
