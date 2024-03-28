import { reactive, toRaw } from "vue";

const fetchApi = () => {
  const formStatus = reactive({
    url: "",
    error: false,
    isload: false,
  });

    // Inicialize shortenedUrl com os dados do localStorage
  const shortenedUrl = reactive(JSON.parse(localStorage.getItem('shortLink')) || []);

  const clickShortens = async () => {
    console.log("clickShortens foi chamado");

    try {
      formStatus.isload = true;
      if (formStatus.url) {
        const response = await fetch("http://localhost:3000/api/v1/shorten", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ url: formStatus.url }),
        });

        if (response.ok) {
          const data = await response.json();

          if (data && data.shortUrl) {
            const full_shortlink = data.shortUrl;

            const meuLink = {
              original_link: formStatus.url,
              full_shortlink,
              short_link: full_shortlink.split("/").pop(),
            };

            shortenedUrl.push(meuLink);
            
            // Adicione o novo link ao localStorage
            const currentLinks = JSON.parse(localStorage.getItem('shortLink')) || []; 
            currentLinks.push(meuLink);
            localStorage.setItem('shortLink', JSON.stringify(currentLinks));

            // Defina um temporizador para remover o link do localStorage após 3 minutos
            setTimeout(() => {
              // Obtenha a lista atual de links do localStorage
              const currentLinks = JSON.parse(localStorage.getItem('shortLink')) || [];
              
              //remova o link do localStorage
              const index = currentLinks.filter(link => link.full_shortlink === meuLink.full_shortlink);
              if (index !== -1) {
                currentLinks.splice(index, 1);
              }
              //salve a lista atualizada no localStorage
              localStorage.setItem('shortLink', JSON.stringify(currentLinks));
            
            },3 * 60 * 1000);

            formStatus.url = "";
            formStatus.error = false;
          } else {
            console.log("data is undefined or deos not include result_url");
          }
        } else {
          formStatus.error = true;
        }
      } else {
        formStatus.error = true;
      }
    } catch (error) {
      console.log("error:", error.message);
      formStatus.error = true;
    } finally {
      formStatus.isload = false;
    }
    console.log("shortendUrl apos a solicitacao:", toRaw(shortenedUrl));
  };
  return { formStatus, shortenedUrl, clickShortens };
};

export default fetchApi;
