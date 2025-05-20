package com.daw.demo.controller;


import com.daw.demo.model.Usuario;
import com.daw.demo.service.UsuarioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    private UsuarioService usuarioService;

    @GetMapping
    public List<Usuario> getAllUsuarios() {
        return usuarioService.getAllUsuarios();
    }

    // GET: Obtener usuario por ID
    @GetMapping("/{id}")
    public Optional<Usuario> getUsuarioById(@PathVariable Long id) {
        return usuarioService.getUsuarioById(id);
    }

    // GET: Buscar usuario por correo
    @GetMapping("/correo/{correo}")
    public Optional<Usuario> getUsuarioByCorreo(@PathVariable String correo) {
        return usuarioService.getUsuarioByCorreo(correo);
    }

    // GET: Obtener usuarios por nombre de rol
    @GetMapping("/rol/{nombreRol}")
    public List<Usuario> getUsuariosByRol(@PathVariable String nombreRol) {
        return usuarioService.getUsuariosByRol(nombreRol);
    }

    // POST: Crear un nuevo usuario
    @PostMapping
    public Usuario createUsuario(@RequestBody Usuario usuario) {
        return usuarioService.createUsuario(usuario);
    }

    // PUT: Actualizar un usuario existente
    @PutMapping("/{id}")
    public Usuario updateUsuario(@PathVariable Long id, @RequestBody Usuario usuarioDetails) {
        return usuarioService.updateUsuario(id, usuarioDetails);
    }

    // DELETE:elimancion de ususario

    @DeleteMapping("/{id}")
    public void deleteUsuario(@PathVariable Long id) {
        usuarioService.deleteUsuario(id);
    }

}
