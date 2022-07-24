import Testimonio from "./componentes/Testimonio";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

function App() {
  return (
    <div>
      <Typography
        className="centrar-texto"
        variant="h4"
        gutterBottom
        component="div"
      >
        Opiniones de clientes sobre nuestros servicios
      </Typography>
      <Divider variant="middle" />
      <Testimonio
        nombre="Jinx"
        pais="Los barrios pobres, Zaun"
        imagen="jinx"
        alt="Foto de Jinx"
        subtitulo="La bala perdida"
        testimonio="Amet volutpat consequat mauris nunc. Ullamcorper malesuada proin libero nunc. Fringilla phasellus faucibus scelerisque eleifend. Morbi enim nunc faucibus a pellentesque sit. Iaculis at erat pellentesque adipiscing commodo elit at. Morbi leo urna molestie at. Dui vivamus arcu felis bibendum ut tristique et. Senectus et netus et malesuada fames ac turpis egestas integer. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu."
      />
      <Testimonio
        nombre="Ahri"
        pais="Jonia"
        imagen="ahri"
        alt="Foto de Ahri"
        subtitulo="La vastaya de nueve colas"
        testimonio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus id interdum velit laoreet id donec ultrices tincidunt arcu. Nunc aliquet bibendum enim facilisis gravida neque convallis a cras. Morbi tristique senectus et netus et malesuada fames. Proin sed libero enim sed faucibus turpis in. Velit egestas dui id ornare arcu odio ut sem nulla. Odio pellentesque diam volutpat commodo sed. Sed tempus urna et pharetra pharetra massa massa ultricies mi. Ornare arcu dui vivamus arcu felis bibendum ut tristique et. Tristique senectus et netus et. Velit dignissim sodales ut eu sem integer. Nunc sed velit dignissim sodales ut eu sem integer vitae. Quam pellentesque nec nam aliquam sem et tortor consequat id. Justo eget magna fermentum iaculis eu non. Bibendum at varius vel pharetra. Diam sollicitudin tempor id eu nisl. Duis at tellus at urna condimentum mattis pellentesque id."
      />
      <Testimonio
        nombre="Riven"
        pais="Jonia"
        imagen="riven"
        alt="Foto de Riven"
        subtitulo="La desterrada"
        testimonio="Sed euismod nisi porta lorem mollis aliquam ut porttitor leo. Leo integer malesuada nunc vel risus. Blandit massa enim nec dui nunc. Sem nulla pharetra diam sit amet nisl. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Hendrerit dolor magna eget est lorem ipsum dolor. Ac orci phasellus egestas tellus rutrum. Quam vulputate dignissim suspendisse in est. Non diam phasellus vestibulum lorem sed risus ultricies. Etiam tempor orci eu lobortis elementum nibh tellus molestie. Amet mattis vulputate enim nulla aliquet porttitor."
      />
    </div>
  );
}

export default App;
