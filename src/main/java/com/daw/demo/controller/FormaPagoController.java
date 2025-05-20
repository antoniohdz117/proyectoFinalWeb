package com.daw.demo.controller;

import com.daw.demo.model.FormaPago;
import com.daw.demo.service.FormaPagoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public class FormaPagoController {

    @Autowired
    private FormaPagoService formaPagoService;

    @GetMapping
    public ResponseEntity<List<FormaPago>> getAllFormasPago() {
        return ResponseEntity.ok(formaPagoService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<FormaPago> getFormaPagoById(@PathVariable Integer id) {
        return formaPagoService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<FormaPago> createFormaPago(@RequestBody FormaPago formaPago) {
        return ResponseEntity.ok(formaPagoService.save(formaPago));
    }

    @PutMapping("/{id}")
    public ResponseEntity<FormaPago> updateFormaPago(@PathVariable Integer id, @RequestBody FormaPago formaPago) {
        formaPago.setIdFormaPago(id);
        return ResponseEntity.ok(formaPagoService.save(formaPago));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFormaPago(@PathVariable Integer id) {
        formaPagoService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
