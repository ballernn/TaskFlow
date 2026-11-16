import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import Cabecalho from "../components/Cabecalho";
import Botao from "../components/botao";

import { cores } from "../styles/tema";

export default function Detalhes({ route, navigation }) {
  // Recebe a tarefa enviada pela tela Home
  const { tarefa } = route.params;

  return (
    <View style={estilos.container}>
      <Cabecalho
        titulo="Detalhes da tarefa"
        subtitulo="Confira todas as informações da atividade."
      />

      <View style={estilos.card}>
        <Text style={estilos.rotulo}>
          NOME DA TAREFA
        </Text>

        <Text style={estilos.titulo}>
          {tarefa.titulo}
        </Text>

        <View style={estilos.divisor} />

        <Text style={estilos.rotulo}>
          DESCRIÇÃO
        </Text>

        <Text style={estilos.descricao}>
          {tarefa.descricao}
        </Text>

        <View style={estilos.divisor} />

        <Text style={estilos.rotulo}>
          PRIORIDADE
        </Text>

        <Text style={estilos.informacao}>
          {tarefa.prioridade}
        </Text>

        <View style={estilos.divisor} />

        <Text style={estilos.rotulo}>
          STATUS
        </Text>

        <View
          style={[
            estilos.status,
            tarefa.concluida
              ? estilos.statusConcluido
              : estilos.statusPendente,
          ]}
        >
          <Text style={estilos.textoStatus}>
            {tarefa.concluida
              ? "Concluída"
              : "Pendente"}
          </Text>
        </View>
      </View>

      <Botao
        titulo="Voltar para tarefas"
        aoPressionar={() => navigation.goBack()}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: cores.fundo,
  },

  card: {
    backgroundColor: cores.branco,
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: cores.borda,
    marginBottom: 25,
  },

  rotulo: {
    color: cores.secundario,
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: 8,
  },

  titulo: {
    color: cores.texto,
    fontSize: 21,
    fontWeight: "bold",
  },

  descricao: {
    color: cores.texto,
    fontSize: 15,
    lineHeight: 23,
  },

  informacao: {
    color: cores.principal,
    fontSize: 15,
    fontWeight: "600",
  },

  divisor: {
    height: 1,
    backgroundColor: cores.borda,
    marginVertical: 18,
  },

  status: {
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
  },

  statusConcluido: {
    backgroundColor: cores.sucesso,
  },

  statusPendente: {
    backgroundColor: "#FFF0D9",
  },

  textoStatus: {
    color: cores.principal,
    fontWeight: "600",
    fontSize: 13,
  },
});
