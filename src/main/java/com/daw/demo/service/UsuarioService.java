package com.daw.demo.service;

import com.daw.demo.model.Usuario;
import com.daw.demo.repository.UsuarioRepository;

import java.util.List;
import java.util.Optional;

public class UsuarioService {
    private final UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    /*
    public List<Usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }

    public Usuario crearUsuario(Usuario usuario) {
        // lógica extra aquí si se requiere
        return usuarioRepository.save(usuario);
    }

    */


    public List<Usuario> getAllUsuariosById(String name) {
        return usuarioRepository.findAll();
    }




    //Eliminacion de un usaurio
    public void deleteUsuario(Long id) {
        usuarioRepository.deleteById(id);
    }

    //Acytualizacion de usaurio
    public Usuario updateUsuario(Long id, Usuario usuarioDetails) {
        return usuarioRepository.findById(id)
                .map(usuario -> {
                    usuario.setNombre(usuarioDetails.getNombre());
                    usuario.setEmail(usuarioDetails.getEmail());
                    usuario.setContrasenia(usuarioDetails.getContrasenia());
                    usuario.setRol(usuarioDetails.getRol());
                    return usuarioRepository.save(usuario);
                }).orElseThrow(() -> new RuntimeException("Usuario no encontrado con id: " + id));
    }

    // Obtener un usuario por ID
    public Optional<Usuario> getUsuarioById(Long id) {
        return usuarioRepository.findById(id);
    }

    // Crear un nuevo usuario
    public Usuario createUsuario(Usuario usuario) {
        return usuarioRepository.save(usuario);
    }


}
