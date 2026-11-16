import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import { cores } from "../styles/tema";

export default function Cabecalho({
  titulo,
  subtitulo,
}) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>
        {titulo}
      </Text>

      <Text style={estilos.subtitulo}>
        {subtitulo}
      </Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  titulo: {
    fontSize: 27,
    fontWeight: "bold",
    color: cores.texto,
  },
  subtitulo: {
    fontSize: 14,
    color: cores.secundario,
    marginTop: 6,
  },
});
