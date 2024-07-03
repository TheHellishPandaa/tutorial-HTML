function confirmar_envio() {
	if (confirm("¿Confirme que los datos son correctos y pulse aceptar?")) {
		return true;
	}
	else {
		return false;
	}
}
