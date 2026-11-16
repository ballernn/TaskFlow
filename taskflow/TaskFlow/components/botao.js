import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

import { cores } from "../styles/tema";

export default function Botao({
  titulo,
  aoPressionar,
  secundario = false,
}) {
  return (
    <TouchableOpacity
      style={[
        estilos.botao,
        secundario && estilos.secundario,
      ]}
      onPress={aoPressionar}
      activeOpacity={0.8}
    >
      <Text
        style={[
          estilos.texto,
          secundario && estilos.textoSecundario,
        ]}
      >
        {titulo}
      </Text>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  botao: {
    backgroundColor: cores.principal,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  secundario: {
    backgroundColor: cores.branco,
    borderWidth: 1,
    borderColor: cores.borda,
  },
  texto: {
    color: cores.branco,
    fontSize: 15,
    fontWeight: "600",
  },
  textoSecundario: {
    color: cores.principal,
  },
});
