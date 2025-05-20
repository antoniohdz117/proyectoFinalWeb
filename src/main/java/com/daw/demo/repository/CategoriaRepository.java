package com.daw.demo.repository;

import com.daw.demo.model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public class CategoriaRepository extends JpaRepository<Categoria, Long> {

    Optional<Categoria> findByCategoria(String Categoria);
    List<Categoria> findByCategoria(String descripcion);

}
