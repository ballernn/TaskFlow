import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { cores } from "../styles/tema";

export default function CardTarefa({
  tarefa,
  aoPressionar,
  aoConcluir,
}) {
  return (
    <View style={estilos.card}>
      <TouchableOpacity
        style={estilos.conteudo}
        onPress={aoPressionar}
        activeOpacity={0.7}
      >
        <View style={estilos.linha}>
          <Text
            style={[
              estilos.titulo,
              tarefa.concluida && estilos.concluida,
            ]}
          >
            {tarefa.titulo}
          </Text>

          <View style={estilos.prioridade}>
            <Text style={estilos.textoPrioridade}>
              {tarefa.prioridade}
            </Text>
          </View>
        </View>

        <Text style={estilos.descricao}>
          {tarefa.descricao}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          estilos.botao,
          tarefa.concluida && estilos.botaoConcluido,
        ]}
        onPress={aoConcluir}
      >
        <Text style={estilos.textoBotao}>
          {tarefa.concluida
            ? "Concluída ✓"
            : "Concluir"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  card: {
    backgroundColor: cores.branco,
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: cores.borda,
  },
  conteudo: {
    marginBottom: 14,
  },
  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titulo: {
    color: cores.texto,
    fontSize: 16,
    fontWeight: "600",
    flex: 1,
  },
  concluida: {
    textDecorationLine: "line-through",
    color: cores.secundario,
  },
  descricao: {
    color: cores.secundario,
    fontSize: 13,
    marginTop: 8,
  },
  prioridade: {
    backgroundColor: "#F0F2F4",
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 8,
  },
  textoPrioridade: {
    color: cores.principal,
    fontSize: 11,
    fontWeight: "600",
  },
  botao: {
    alignSelf: "flex-start",
    backgroundColor: cores.sucesso,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  botaoConcluido: {
    backgroundColor: "#EDF0F2",
  },
  textoBotao: {
    color: cores.principal,
    fontSize: 12,
    fontWeight: "600",
  },
});
