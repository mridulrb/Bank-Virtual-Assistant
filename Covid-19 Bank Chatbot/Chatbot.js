<script>
    const element = document.querySelector('.chatElementAr');
    const elementEnglish = document.querySelector('.chatElementEn');
    const integrationIdLocalized = {"en": "2a869ab9-0f66-4f46-bd7e-194f9e91ad5b",
  "ar": "2eb94809-a744-4868-b6fb-a9af92b84c54"
};
    let isEnglish = true;  
    let language = isEnglish ? "en": "ar";
    function startChatBot(){
    window.watsonAssistantChatOptions = {
      // A UUID like '1d7e34d5-3952-4b86-90eb-7c7232b9b540' included in the embed code provided in Watson Assistant.
      integrationID: integrationIdLocalized[language], 
      // Your assistants region e.g. 'us-south', 'us-east', 'jp-tok' 'au-syd', 'eu-gb', 'eu-de', etc.
      region: 'us-south',
      carbonTheme: 'g90',
      // Provide the custom element.
      element: element,
      // Hide the close button since we want it always open.
      hideCloseButton: true,
      // Hide the default launcher.
      showLauncher: false,
      // Make the window open by default.
      openChatByDefault: true,
  
      onLoad: function(instance) {
        instance.updateCSSVariables({
              'BASE-font-family': '"IBM Plex Sans", Helvetica Neue, Arial',
              '$focus': '#3d3d3d',
              '$hover-primary': '#252525',
              '$interactive-01': '#0f6dff'
            });
        instance.render();
      }
    };

    setTimeout(function(){const t=document.createElement('script');t.src='loadWatsonAssistantChat.js';document.head.appendChild(t);});
    }
    startChatBot(); 
let switchLanguageBtn = document.getElementById("switch-language");
switchLanguageBtn.onclick = function(){
  isEnglish = !isEnglish;
  language = isEnglish ? "en": "ar";
  switchLanguageBtn.innerHTML = language;
  startChatBot();
  alert(window.watsonAssistantChatOptions.integrationID);
}

  </script>  