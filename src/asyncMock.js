const products = [
  {
    id: "1RNB",
    name: "Beat Estilo Post Malone",
    price: 39,
    category: "rnb",
    img: "https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzXC9wcm9kXC82MjEyMDNcL2ltYWdlXC8xNjMzNjIwMjU4XC9vdGhlci1zaWRlLWJlYXRzdGFycy0ycG4ucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6bnVsbCwid2lkdGgiOjI0MCwiaGVpZ2h0IjoyNDB9fX0=?t=1689725847",
    stock: 20,
    description: "Beat de rnb soft and rythm",
  },
  {
    id: "2RNB",
    name: "Beat Estilo Tiago PZK",
    price: 39,
    category: "rnb",
    img: "https://cdn5.beatstars.com/eyJidWNrZXQiOiJwcm9kLWJ0cy10cmFjayIsImtleSI6InByb2QvdHJhY2svYXJ0d29yay9USzE0NDE1ODEwL2FydHdvcmsuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImZpbGwiLCJ3aWR0aCI6MjQwLCJoZWlnaHQiOjI0MH19fQ==?t=1677749705498",
    stock: 20,
    description: "Beat de rnb soft and rythm",
  },
  {
    id: "3RNB",
    name: "Beat Estilo SZA",
    price: 39,
    category: "rnb",
    img: "https://cdn5.beatstars.com/eyJidWNrZXQiOiJwcm9kLWJ0cy10cmFjayIsImtleSI6InByb2QvdHJhY2svYXJ0d29yay9USzE1MDM1Mzg1L3dvcmtwaWN0dXJlLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOjI0MCwiaGVpZ2h0IjoyNDB9fX0=?t=1683225119163",
    stock: 20,
    description: "Beat de rnb soft and rythm",
  },
  {
    id: "1HH",
    name: "Beat Estilo Kanye West",
    price: 39,
    category: "hiphop",
    img: "https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMjU1OTAzL2ltYWdlL3JxRXlxNWVZNngxWi9rYW55ZWJlYXRzdGFycy5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiZmlsbCIsIndpZHRoIjoyNDAsImhlaWdodCI6MjQwfX19?t=1637870156609",
    stock: 20,
    description: "Beat de hip hop",
  },
  {
    id: "2HH",
    name: "Beat Estilo Ty Dolla Sign",
    price: 39,
    category: "hiphop",
    img: "https://cdn5.beatstars.com/eyJidWNrZXQiOiJwcm9kLWJ0cy10cmFjayIsImtleSI6InByb2QvdHJhY2svYXJ0d29yay9USzk0MDE2NzgvaW1nMjczMC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiZmlsbCIsIndpZHRoIjoyNDAsImhlaWdodCI6MjQwfX19?t=1637067939326",
    stock: 20,
    description: "Beat de rnb soft and rythm",
  },
  {
    id: "3HH",
    name: "Beat Estilo Megan Thee Stallion",
    price: 39,
    category: "hiphop",
    img: "https://cdn5.beatstars.com/eyJidWNrZXQiOiJidHMtY29udGVudCIsImtleSI6InVzZXJzL3Byb2QvMzEzNDAwL2ltYWdlLzlJc01OYXBiVmU2WS92ZmM1MXJna2VwZy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiZmlsbCIsIndpZHRoIjoyNDAsImhlaWdodCI6MjQwfX19?t=1638358555289",
    stock: 20,
    description: "Beat de Beat de hip hop",
  },
  {
    id: "1POP",
    name: "Beat Estilo Billie Eilish",
    price: 39,
    category: "pop",
    img: "https://cdn5.beatstars.com/eyJidWNrZXQiOiJwcm9kLWJ0cy10cmFjayIsImtleSI6InByb2QvdHJhY2svYXJ0d29yay9USzExMzU2MTczL2xhYnlyaW50aC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiZmlsbCIsIndpZHRoIjoyNDAsImhlaWdodCI6MjQwfX19?t=1650607439016",
    stock: 20,
    description: "Beat de Pop",
  },
  {
    id: "2POP",
    name: "Beat Estilo Olivia Rodrigo",
    price: 39,
    category: "pop",
    img: "https://cdn5.beatstars.com/eyJidWNrZXQiOiJwcm9kLWJ0cy10cmFjayIsImtleSI6InByb2QvdHJhY2svYXJ0d29yay9USzEzNjk0NDkxL2ZpaWJjZXJ2ZWFlaGJlMy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiZmlsbCIsIndpZHRoIjoyNDAsImhlaWdodCI6MjQwfX19?t=1671773674780",
    stock: 20,
    description: "Beat de Pop",
  },
  {
    id: "3POP",
    name: "Beat Estilo Harry Styles",
    price: 39,
    category: "pop",
    img: "https://cdn5.beatstars.com/eyJidWNrZXQiOiJwcm9kLWJ0cy10cmFjayIsImtleSI6InByb2QvdHJhY2svYXJ0d29yay9USzEyNzI1ODgyLzNkN2NhNTAxYWZiMjZhNGEwNTllMDVmNDk3YmU4Yzc5LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJmaWxsIiwid2lkdGgiOjI0MCwiaGVpZ2h0IjoyNDB9fX0=?t=1663327307582",
    stock: 20,
    description: "Beat de Pop",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === productCategory));
    }, 500);
  });
};
