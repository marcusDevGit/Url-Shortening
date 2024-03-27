import { reactive } from "vue";

const fetchApi = () => {
  const formStatus = reactive({
    url: "",
    error: false,
    isload: false,
  });

  const shortenedUrl = reactive ([])

  const clickShortens = async () => {
    formStatus.isload = true;
    if(formStatus.url) {
        const response = await fetch(`https://gotiny.cc/api?url=${formStatus.url}`)
       if(response.ok){
        const data = await response.json()
        const { full_shortlink, original_link, short_link} = data.response

        shortenedUrl.push({
            original_link,
            full_shortlink,
            short_link
        })

        formStatus.url = '';
        formStatus.error = false;
       } else{
              formStatus.error = true;
       }
    }else{
        formStatus.error = true;
    }
    formStatus.isload = false;
  };
  return { formStatus, shortenedUrl, clickShortens };
};


export default fetchApi;
