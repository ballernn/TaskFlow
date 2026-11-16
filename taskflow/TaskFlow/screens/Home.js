import React, { useState } from "react";

import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Cabecalho from "../components/Cabecalho";
import CardTarefa from "../components/CardTarefa";
import Botao from "../components/botao";

import { cores } from "../styles/tema";

export default function Home({
  navigation,
  tarefas,
  aoConcluir,
  carregando,
}) {
  const [filtro, setFiltro] = useState("Todas");

  // Filtra as tarefas conforme a opção selecionada
  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === "Pendentes") {
      return !tarefa.concluida;
    }

    if (filtro === "Concluídas") {
      return tarefa.concluida;
    }

    return true;
  });

  // Abre os detalhes da tarefa selecionada
  const abrirDetalhes = (tarefa) => {
    navigation.navigate("Detalhes", {
      tarefa: tarefa,
    });
  };

  // Cabeçalho da lista
  const cabecalhoLista = () => (
    <View>
      <Cabecalho
        titulo="Minhas tarefas"
        subtitulo="Organize seu dia e acompanhe seu progresso."
      />

      <View style={estilos.resumo}>
        <View>
          <Text style={estilos.numero}>
            {tarefas.length}
          </Text>
          <Text style={estilos.rotulo}>
            Total de tarefas
          </Text>
        </View>

        <View>
          <Text style={estilos.numero}>
            {tarefas.filter((t) => t.concluida).length}
          </Text>
          <Text style={estilos.rotulo}>
            Concluídas
          </Text>
        </View>

        <View>
          <Text style={estilos.numero}>
            {tarefas.filter((t) => !t.concluida).length}
          </Text>
          <Text style={estilos.rotulo}>
            Pendentes
          </Text>
        </View>
      </View>

      <Text style={estilos.tituloSecao}>
        Suas atividades
      </Text>

      <View style={estilos.filtros}>
        {["Todas", "Pendentes", "Concluídas"].map((opcao) => (
          <TouchableOpacity
            key={opcao}
            style={[
              estilos.filtro,
              filtro === opcao && estilos.filtroAtivo,
            ]}
            onPress={() => setFiltro(opcao)}
          >
            <Text
              style={[
                estilos.textoFiltro,
                filtro === opcao && estilos.textoFiltroAtivo,
              ]}
            >
              {opcao}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  // Mensagem quando não existem tarefas
  const mensagemVazia = () => (
    <View style={estilos.vazio}>
      <Text style={estilos.vazioTitulo}>
        Nenhuma tarefa encontrada
      </Text>

      <Text style={estilos.vazioTexto}>
        Adicione uma tarefa ou escolha outro filtro.
      </Text>
    </View>
  );

  return (
    <View style={estilos.container}>
      {carregando ? (
        <Text style={estilos.carregando}>
          Carregando tarefas...
        </Text>
      ) : (
        <FlatList
          data={tarefasFiltradas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardTarefa
              tarefa={item}
              aoPressionar={() => abrirDetalhes(item)}
              aoConcluir={() => aoConcluir(item.id)}
            />
          )}
          ListHeaderComponent={cabecalhoLista}
          ListEmptyComponent={mensagemVazia}
          contentContainerStyle={estilos.lista}
          showsVerticalScrollIndicator={false}
        />
      )}

      <View style={estilos.rodape}>
        <Botao
          titulo="+ Adicionar tarefa"
          aoPressionar={() => navigation.navigate("Cadastro")}
        />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cores.fundo,
  },

  lista: {
    padding: 20,
    paddingBottom: 10,
    flexGrow: 1,
  },

  resumo: {
    backgroundColor: cores.principal,
    borderRadius: 16,
    padding: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 26,
  },

  numero: {
    color: cores.branco,
    fontSize: 23,
    fontWeight: "bold",
  },

  rotulo: {
    color: "#D5DDE5",
    fontSize: 11,
    marginTop: 4,
  },

  tituloSecao: {
    color: cores.texto,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 14,
  },

  filtros: {
    flexDirection: "row",
    marginBottom: 18,
  },

  filtro: {
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 9,
    backgroundColor: cores.branco,
    marginRight: 8,
    borderWidth: 1,
    borderColor: cores.borda,
  },

  filtroAtivo: {
    backgroundColor: cores.principal,
    borderColor: cores.principal,
  },

  textoFiltro: {
    color: cores.secundario,
    fontSize: 12,
    fontWeight: "600",
  },

  textoFiltroAtivo: {
    color: cores.branco,
  },

  vazio: {
    alignItems: "center",
    padding: 25,
  },

  vazioTitulo: {
    color: cores.texto,
    fontSize: 16,
    fontWeight: "600",
  },

  vazioTexto: {
    color: cores.secundario,
    fontSize: 13,
    marginTop: 8,
    textAlign: "center",
  },

  carregando: {
    color: cores.secundario,
    textAlign: "center",
    marginTop: 30,
  },

  rodape: {
    padding: 20,
    paddingTop: 10,
    backgroundColor: cores.fundo,
    borderTopWidth: 1,
    borderTopColor: cores.borda,
  },
});
