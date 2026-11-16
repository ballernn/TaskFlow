import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import Cabecalho from "../components/Cabecalho";
import Botao from "../components/botao";

import { cores } from "../styles/tema";

export default function Cadastro({ navigation, aoAdicionar }) {
  const [formulario, setFormulario] = useState({
    titulo: "",
    descricao: "",
    prioridade: "Média",
  });

  // Atualiza os campos do formulário
  const atualizarCampo = (campo, valor) => {
    setFormulario((anterior) => ({
      ...anterior,
      [campo]: valor,
    }));
  };

  // Salva uma nova tarefa
  const salvarTarefa = () => {
    if (formulario.titulo.trim() === "") {
      Alert.alert(
        "Atenção",
        "Digite um título para a tarefa."
      );
      return;
    }

    const novaTarefa = {
      id: Date.now().toString(),
      titulo: formulario.titulo.trim(),
      descricao:
        formulario.descricao.trim() ||
        "Nenhuma descrição informada.",
      prioridade: formulario.prioridade,
      concluida: false,
    };

    aoAdicionar(novaTarefa);

    Alert.alert(
      "Sucesso!",
      "Sua tarefa foi cadastrada."
    );

    navigation.goBack();
  };

  return (
    <View style={estilos.container}>
      <Cabecalho
        titulo="Nova tarefa"
        subtitulo="Preencha os dados para organizar sua atividade."
      />

      <View style={estilos.formulario}>
        <Text style={estilos.rotulo}>
          Título da tarefa
        </Text>

        <TextInput
          style={estilos.input}
          placeholder="Ex: Estudar programação"
          placeholderTextColor={cores.secundario}
          value={formulario.titulo}
          onChangeText={(valor) =>
            atualizarCampo("titulo", valor)
          }
        />

        <Text style={estilos.rotulo}>
          Descrição
        </Text>

        <TextInput
          style={[estilos.input, estilos.inputDescricao]}
          placeholder="Descreva sua tarefa..."
          placeholderTextColor={cores.secundario}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          value={formulario.descricao}
          onChangeText={(valor) =>
            atualizarCampo("descricao", valor)
          }
        />

        <Text style={estilos.rotulo}>
          Prioridade
        </Text>

        <View style={estilos.prioridades}>
          {["Baixa", "Média", "Alta"].map((opcao) => (
            <TouchableOpacity
              key={opcao}
              style={[
                estilos.opcao,
                formulario.prioridade === opcao &&
                  estilos.opcaoSelecionada,
              ]}
              onPress={() =>
                atualizarCampo("prioridade", opcao)
              }
            >
              <Text
                style={[
                  estilos.textoOpcao,
                  formulario.prioridade === opcao &&
                    estilos.textoOpcaoSelecionada,
                ]}
              >
                {opcao}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={estilos.acoes}>
        <Botao
          titulo="Salvar tarefa"
          aoPressionar={salvarTarefa}
        />

        <View style={{ height: 12 }} />

        <Botao
          titulo="Cancelar"
          secundario
          aoPressionar={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: cores.fundo,
  },

  formulario: {
    backgroundColor: cores.branco,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: cores.borda,
  },

  rotulo: {
    color: cores.texto,
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 9,
    marginTop: 12,
  },

  input: {
    backgroundColor: cores.fundo,
    borderWidth: 1,
    borderColor: cores.borda,
    borderRadius: 10,
    padding: 13,
    fontSize: 14,
    color: cores.texto,
  },

  inputDescricao: {
    height: 110,
  },

  prioridades: {
    flexDirection: "row",
    gap: 9,
  },

  opcao: {
    flex: 1,
    padding: 12,
    alignItems: "center",
    borderRadius: 9,
    backgroundColor: cores.fundo,
    borderWidth: 1,
    borderColor: cores.borda,
  },

  opcaoSelecionada: {
    backgroundColor: cores.principal,
    borderColor: cores.principal,
  },

  textoOpcao: {
    color: cores.secundario,
    fontSize: 13,
    fontWeight: "600",
  },

  textoOpcaoSelecionada: {
    color: cores.branco,
  },

  acoes: {
    marginTop: 24,
  },
});
