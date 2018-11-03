import { Card } from 'antd';
import React from 'react'



class Cardy extends React.Component {



    render() {
return (

  <Card
  className="card"
  headStyle= {
    {
      backgroundColor: "rgb(240, 140, 100)",
      textAlign: "center",
      letterSpacing: "2px",
    }
  }
    title="Card title"
    style={{ width: 300 }}
    hoverable
    cover={<img alt="example" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAM1BMVEXMzMyVlZWTk5PLy8uXl5fPz8+5ubnHx8ednZ2ampq1tbXDw8O8vLzAwMCtra2ioqKnp6dvyVRkAAAEbUlEQVR4nO3Y7ZajNgyAYfyBAWMM93+1lWQgJLPbSff0dMjp+/zYDIF1sLBlma4DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPwv9OLl+PX8P2jqX2rpZw2p1rw8jpdccwnnYdDT81sthVJrTcN5POenw1Ck5SX86n/eTFkn5+KY93sNeY1yWI+uDJueXtMbXRm20Tk3bnt8Q5GW3LQd8RzyGC8/dGOzdNl56XZqx2lqh7WN8rC10+P3I+W4NK7t2kUjJNa9pRrt9JTvPn/6Ue8yrdIVGxmzdGwt8s/YnnaSR1uTXFSHv21HWsoxujVliWnVoRCqNJIlEL5FW0O0LvJD63sT8ecs3k1yz2V0Xp9fn1yMS9dL9zZ9nBoyec4pRv9dT2a9VOeeb4Nq8DHmvpfwRmupSsuhG6Tluw+UIVvnddzbpzzcbdAOuFUHhsysmPpulsf7XR6QuTHJJX2R/6IxSV6GhQRZDnXIDfIL9fyBe+t77as+Tp33R+dl+IxFh020DlpPzpiEQewfl0D1s003HVP6x975QWKiA0Omji+6ilmoPsEgsdCsukg2KPqFDXwZL9FNOqWy5Ibj6fab937suyXK55cZJeGLk4ZxbC3K7Is6AtMUvY08yV/lv+zaHwpBMmPUO11iG+kh2srTb9GNFpO45+DOYhJjnCVxSP788siTpqKhtWAZarUReLYwx3OJu7M559Emu+RaeYoWk8me8jGldA65Mya5TjFWHVrrl9Sgq4tFN7jYYiJhtZhIy3uGch8QkyJVw5745E9bhPeRrw/Z1p9j5JvQyZQaNXzlNe9KJo1t2Q4+TkdMxv4x+2R58unmC0+ngfBuT3xvxaQlznWvQ55oSFr98eExGUqSKtzu+M2YaLFxlnWXr7OLtl51Hx+T7lGznTl2+n2OVUGybKyvrSySX6d8XPElx04flGOVJNOpf2/dUbrCftm4aCDPQH30umMd082Kb/WJt1XjUZ/E1/pEFR/j68albXiOFPPb+kTm1N3rk7mm/hETrcC1jp33vKKV+dDq2GtC7XVEyJVPLUnibQt5s5e+w2i7g052f1bMaB17802g3mLXnQXr635naPsd7dDlDYqWK2N62eFKE60i2ZW23znmzLHf2X61XN3Loq8Kgu1G8lGcFUuh9gJFs8EYuty2PQeZF61mu+4LZUDopXbejqP2PmgD1lJrY9nTzJ1pp6eq79ZsVbDHOebH+5MifdiszH10f9EsI7W9XvkYPZIw3JaysaJNK9dajw2UbS/X9AnvT2RaeHsbNu2LQWlvx+I+BEJtpy97Wd3vaNVi79HOqsWmjhx75/dd0Nxa9seGWgbK9YfubKkyb+J63GmQ+k0Oz1kxVH0Tt11eLdu+eNEz8umfdsuHFsBFX+U+3uzqm17/3pvdHxeWlMplPM8lpeXl9NNWT76wjs1p/+P89rBfPmhLlxBIy+X2EwcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/thfd/YmrD763FMAAAAASUVORK5CYII=" />}
    >

    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>



    );
  }
}

export default Cardy

