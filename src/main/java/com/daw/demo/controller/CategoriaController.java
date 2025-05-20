package com.daw.demo.controller;


import com.daw.demo.model.Categoria;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/categoria")
public class CategoriaController {

    @GetMapping
    public List<Categoria> getCategoria() {
        return categoriaService.guardarCategoria(categoria);
    }

}
