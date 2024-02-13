const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100vh",
  backgroundSize: "fill",
  backgroundPosition: "center",
};
  
  const cardStyle = {
    height: "auto",
    width: "40%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    boxShadow: "0 8px 40px 12px white",
    padding: "2rem",
    margin: "2rem",
    gap: "20px",
    animation: 'FadeIn 1s linear forwards',
    '@keyframes FadeIn': {
      "0%": {
        opacity: "0",
      },
      "50%": {
        opacity: "0.5",
      },
      "100%": {
        opacity: "1",
      }
    },

    '@media (min-width:600px)': {
      padding: "3",
    },
    '@media (min-width:900px)': {
      padding: "4",
      height: "auto"
    },
  };
  
  const buttonStyle = {
    width: "100%",
    marginTop: "1rem",
    backgroundColor: "#2bdaa3",
    color: "white",
    "&:hover": {
      border: "1px solid #2bdaa3",
      backgroundColor: "white",
      color: "#2bdaa3",
      boxShadow: "0 4px 20px 0 rgba(0,0,0,0.25)",
    },
    transition: "backgroundColor 0.5s ease-in-out",
  };

  const IconStyle = {
    color: "white",
    fontSize: "5rem",
    position: "fixed",
    bottom: "2%",
    right: "2%",
    "&:hover": {
      color: "#2bdaa3",
    },
    transition: "color 0.5s ease-in-out",
    animation: "pulse 2s infinite alternate, rotate 2s forwards",
    "@keyframes pulse": {
      "0%, 100%": {
        transform: "scale(0.1)",
        },
      "50%": {
        transform: "scale(0.5)",
        },
        },

    "@keyframes rotate": {
      "0%": {
        transform: "rotate(0deg)",
        },
      "100%": {
        transform: "rotate(90deg)",
        },
  },
  }

  
export { buttonStyle, cardStyle, containerStyle, IconStyle };