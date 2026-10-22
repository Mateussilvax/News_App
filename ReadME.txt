=========================================================
          MINI APP DE NOTÍCIAS - COMO RODAR O PROJETO
=========================================================

Siga o passo a passo abaixo após clonar este repositório do Git:

---------------------------------------------------------
1. PRÉ-REQUISITOS
---------------------------------------------------------
- Ter o Node.js instalado no computador (https://nodejs.org/).
- Ter o aplicativo "Expo Go" instalado no celular (disponível na App Store para iPhone e na Play Store para Android).

---------------------------------------------------------
2. INSTALAR AS DEPENDÊNCIAS DO PROJETO
---------------------------------------------------------
Abra o terminal na pasta raiz do projeto (News_App) e execute:

    npm install

Isso vai instalar todas as bibliotecas listadas no package.json e package-lock.json (criando a pasta node_modules).

Caso precise verificar/corrigir a compatibilidade dos pacotes com a versão do Expo ou instalar algum pacote do Expo manualmente, utilize:

    npx expo install --fix

(Ou, caso precise reinstalar os pacotes de navegação do Expo):

    npx expo install @react-navigation/native @react-navigation/drawer @react-navigation/bottom-tabs @react-navigation/native-stack react-native-screens react-native-gesture-handler react-native-reanimated @expo/vector-icons react-native-safe-area-context

---------------------------------------------------------
3. FAZER LOGIN NO EXPO (IMPORTANTE PARA USAR NO IPHONE)
---------------------------------------------------------
Para rodar o projeto no iPhone sem erros de conexão, é recomendado estar logado na mesma conta do Expo tanto no terminal do computador quanto no aplicativo Expo Go do iPhone:

1) Crie uma conta gratuita em: https://expo.dev (caso ainda não tenha).
2) Abra o app "Expo Go" no seu iPhone e faça login na sua conta.
3) No terminal do computador (dentro da pasta do projeto), execute:

    npx expo login

4) Digite seu e-mail/usuário e sua senha do Expo.
   (Para confirmar se o login deu certo, você pode rodar: npx expo whoami)

---------------------------------------------------------
4. INICIAR O PROJETO
---------------------------------------------------------
Com tudo instalado e logado, inicie o servidor do Expo:

    npx expo start

DICA CASO A REDE WI-FI BLOQUEIE A CONEXÃO:
Se o celular não conseguir conectar ao computador mesmo no mesmo Wi-Fi, inicie usando o modo túnel:

    npx expo start --tunnel

---------------------------------------------------------
5. ABRIR NO CELULAR OU EMULADOR
---------------------------------------------------------
- No iPhone (iOS):
  Com o terminal e o app Expo Go logados na mesma conta, basta abrir o aplicativo "Expo Go" no iPhone que o projeto aparecerá automaticamente na lista de servidores ativos. Você também pode abrir o app Câmera do iPhone e apontar para o QR Code exibido no terminal.

- No Android:
  Abra o aplicativo "Expo Go" e toque em "Scan QR code" para ler o QR Code do terminal, ou pressione a tecla "a" no terminal caso esteja com um Emulador Android aberto no computador.
