
import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Detalhes from "./screens/Detalhes";
import Cadastro from "./screens/Cadastro";

import { tarefasIniciais } from "./data/tarefas";
import { cores } from "./styles/tema";

const Stack = createNativeStackNavigator();

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // Carrega as tarefas iniciais quando o aplicativo é aberto
  useEffect(() => {
    setTarefas(tarefasIniciais);
    setCarregando(false);
  }, []);

  // Adiciona uma nova tarefa
  const adicionarTarefa = (novaTarefa) => {
    setTarefas((anteriores) => [...anteriores, novaTarefa]);
  };

  // Altera o estado de conclusão de uma tarefa
  const concluirTarefa = (id) => {
    setTarefas((anteriores) =>
      anteriores.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: cores.branco,
          },
          headerTintColor: cores.principal,
          headerTitleStyle: {
            fontWeight: "600",
          },
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: cores.fundo,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          options={{ title: "TaskFlow" }}
        >
          {(props) => (
            <Home
              {...props}
              tarefas={tarefas}
              aoConcluir={concluirTarefa}
              carregando={carregando}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{ title: "Detalhes da tarefa" }}
        />

        <Stack.Screen
          name="Cadastro"
          options={{ title: "Nova tarefa" }}
        >
          {(props) => (
            <Cadastro
              {...props}
              aoAdicionar={adicionarTarefa}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
