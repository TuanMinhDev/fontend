import "./style.css";
import { useState, useEffect } from "react";
import { productHot, productNew } from "./ProductNewHot";
const Home = () => {
  const img = [
    "https://noithattugia.com/wp-content/uploads/2023/02/thiet-ke-shop-quan-ao-nam-hien-dai-1.jpg",
    "https://pendecor.vn/uploads/files/2023/06/06/-hiet-ke-shop-quan-ao-unisex-1.jpg",
    "https://thietkenoithatatz.com/wp-content/uploads/2022/10/thiet-ke-shop-thoi-trang-cong-so-6.jpg",
  ];
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % img.length);
    }, 3000);

    return () => clearTimeout(interval);
  }, [slideIndex, img.length]);

  return (
    <div>
      <div className="content">
        <div className="slider">
          <img
            src={img[slideIndex]}
            alt={`Slide ${slideIndex}`}
            className="imgSlider"
          />
        </div>
        <div>
          <div>
            <button className="product-navigation">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="product-navigation-item"
              />
            </button>
            <button className="product-navigation">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7mMwleQRD22w6gQ5zdqRqLDzK9G9QLpMtKQ&s"
                alt=""
                className="product-navigation-item"
              />
            </button>
          </div>
          <div>
            <button className="product-navigation">
              <img
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDw4QDw8PDw8PDQ8ODw0NDw8QDg0QFRUWFhURFhUYHSggGBolHRUVITEhJSksLy4uGB8zODMtOCguMC0BCgoKDg0OFRAQFSsdFR0tLS0rKy0tLSstKystKy0tKy0rKystLSstKy0rLSstKy0tLS0tLS0rKy0tNS03NzcrLf/AABEIAL0BCgMBIgACEQEDEQH/xAAcAAADAAMBAQEAAAAAAAAAAAAAAQIEBQYDBwj/xABEEAABBAECAwUFAwkFCAMAAAABAAIDEQQSIQUxQQYTIlFhFDJxgZFScqEHIzNCYpKxwfAWJESC0jRDY6KjstHxFVOD/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABoRAQEBAQEBAQAAAAAAAAAAAAABEQISIQP/2gAMAwEAAhEDEQA/APqFIpUilh1Kk06QgSdJoCApCaKQJNOkIFSE6RSBUilQQgmkUqQgmkUqQgmkUqQglFJp0gmkKkqQJJVSSBIpNJAqRSaEEoVUkglFJ0hBVITpFIEhVSECQnSaBUhNCAQhCAQhCAQhCAQhNAkJpIBCEIBCEIBCEIBJNCBJKkqQJCaSBITSQCSaEFopCEAhCaBIVUikEpp0ikCRSdJoJpFKkIFSKTpFIFSKVUlSBUik6XL8f7awY0vs8UUmZkggOhgIAYfsl2/i9AD5GiiOnpFLD4TxJmRG14BjeR44JCwyxHkWuDSQD/WyzaRSpFJ0hBNIpUhBKE0UglCohKkCRSdIQTSVKkIJpCpKkFopNCBJp0ikCRSqkUgmkwE0IFSKWr4z2kw8MhuTkMjeQD3YD5JADycWMBIHqQs7BzYp42ywSMljdyew2PUehHkdwg96RSaECpCdLQdqOMHHZ4N3XpaOhcRqJPo0Fu3UuHkpbg3yF8wZ2gyw7V37rPSgW/CuS3eB2yeKE7AR1czp8j/G/ksT9IPP8pvbL2GL2fHcBmzssOFXjRGwZfvGiG/AnpR0/ZHgTGQYM0GTjSvyi72syFzpKLaLGb6iWO95pA1HmdIXHdpYH53GM2Qlwh7yOn7/AKMRsDGMvqQL9LPXY43aLiT8Z0WPBD43Q940tDjpZbh4WDmRpcbN+fw6xztfb3QFodv3LoiP7y9rJNLG7nTroBhaemkNvotBxj8pmFj95pd7Q5tBsUbXMLnHprcNNDnqBPwNhfKoeH8QygXZuVNFHTf08j5g0A+HUzWAxo/iuXyIJGvc3vIn6XEd5G4ujeOjmuHMH4fRMNfp3sj2ij4jjDIjjkiqR0T45B7r2gE6XDZzfEN/jsCFul+b+zv5QM7h+O2GN0LhG7wGVjn6YtyYtiLGokjqLIGx2/QXAc85ONDM5gje+NjpYmuDxE8iy3UOY6g9QQpjUrOpKlSEaTSKVJIJpCpFIJSpXSVIJpFKqSpAqSpVSEDpOkJoEhOk0CRSweNzlkLqe6MnVb49PeBrGue/TYIBLWEX0tfPm9rcsO1Nc1rb2ioOaB6k7k+pNlZvWD6fS478ofbJuBGIYXNOZMy2ggEY8fLvXDlfPSDzonkKPpwztux1DIjLD9uPxNPy5j8V8S9oyOIZkspJMsz3Svc73Ymk9f2WjS0D9kBXmys9XH0DhPBDCYJc6KWSbMe4tL45Xt187lLQXF7ujfLd2wDV22CO5a4xa3PbpHssRjaXu3tukuEeqgfC0DcEAmjXyntrx/JixsaN00sji10bJZSCQyPTqcfNx1NFmztzsLneD9npcsOlnc6Nrh4ZXtEkjjWzjqN6dhuSOm60zr9HzcREf6VuhoaXOeSNADRbiHctgCaNGgaBWJ2d7T4eeH+yy6nRnxxva6ORovZ+k82nz+Ro7L825uNkY8jop5NTgxrQWSOdG6LoBfTb3SBVcl1P5Nu2EHDhmySRyvlkZG2JlUyVrSaAfXgOp1m7BaNtwAWLOn6CXA9qJRO+YN3dBM92kc3R6GNc4fAxi/Q30W97H9q2cRxH5LYnQuic6OWNx1ND2sD/AAvoahTh0B9Fw+Q92svDiHatQcDRB87WbN+LawyqEukWTt5ea9Jcpxu44i7fx6S035kNIH4LELCTbtz+C5z8/v0vSjITuQB5AcgjJy3PaxtNPdtcxjy0F8bXHUWB3MAnelDtkmhdWGq7Tdn5524xilj7kxyGYl/jZMHUGuj5naiCNtz88HM4Vw/Eg05DpZZZW+HSam25uj/VaL8/XnyXTalh8X4RiZMzJ3Ml1CCOJ0RcO51MHvivFv5HqSqPnJhboc8MkdG1waZAH6Wno0uG1+lrMwOMzxGAMny444XhzTC9+uFpdbixtgXzoHbc+ZXXdoOPjHd7Dj40bpQwMkYY9UbNW3d92BTiRXpy5rTf2Y4gIXPEYab1ez66kcORcANtttrv57Kj7pwnttgSRY5kzIGSStaG949sffHkXAGqsgijVHZdNS/JEcDj4y+Mbg6HgkvrzHl0X1PhP5YnxiCKXD74DSxzo5Q1/wBkNYNNP6VennXTUZjc6fZEUvLEyWSxskYbY9ocDsavoa6jkV7KNJpCpKkCpCaEEoVUlSBUhOkIBOkUmgEIUveGguPJoLj8BuUHMdps5vfsicaYGPjkI/V71paT8gQvnE8T43uY8U5hLXD1Hl5hdNnymR73O5ucXH0tYWQ/UG95G2QtGlrzqD9I5NJa4WPjdLPXOsTpqYCSf62XphYcUWvu4wwPeZHHq9x8/IDehyH1JyHM9AB9luwQdgnPOJbpZzopY4mSwRymF75IHuB1ROeAHVXPkDvdEX0Wn7Rw5bcWN+KyUmTI9nJxwSYhosN23aTYo7VR89tuArbIWggOc3UKIa5wa8eRA58+R8yto4rgXZRzx3mU8Rx1qMTXASOHVznnZvn1/kdHnQxxSPbDM2eMG2yaS0n0O29eY2PP0He9qODzZOLEMaSIXO72pskjWOYwAGNwB3c272bZsDY9NbwbstjY7XT5r2vDKNSD+7x2aGob6jdc7HoVdGF2b7b5eHiTY0RjLZNWiXT4o9d6/DVOPkTy5bigOm4BlTz47Zpo9OonRIAA2ZvIP0/q7gj1qxsVwPEximYjEEphds2IinXv4Wc3VVbHfmPVemHxyaPGfjxSvZA8lxaXBxYP1g11AtaeZH/k2wfRXBQQtH2cyy3A798glY2Rwc3W3vIBdBh1HcmiQ00aPhDgNtjBxbHk92VoJ/VedJ/HmoPUiygrKwo2ve0F1NcaLm0fp0UZGM5j9LmuYS1j9D6D2B7Q4NcBycLojzQYxSulkSwODWuLXBrtg4ghriOdHqvHSgyzN3kgc4RiR2hj5RGxskgbs3vHtFvqhz8gtH2j4bxDJyZoCTBhRyNYx0pIGSOszQP0o3PKm1Q589gLHJZeHO1r2l7dTQ4am8tQ8r9fNBynH+z+BjQU+eQz82OY7VK40djGKaGetj4+fJ6Y2sBdE4h5IbITJodXNraG5HXfqvpTOy8M2XLPK6TKkmmDomSNbFHGyiBEWBxDgLHMgDTyolani2RLnzSYmJG1uNjyiOWYNqPUNVEbbDwupoFnfoSqNBjdqM+JzHRZWTFpr3JCA7pb2k1Ia+3fIDkF9i4H+VrAlMUU3fxSuLY+8MQdFI800EaCXCz+yKtfLD2Z7mRwmPetNmIgaWOb5kb+LzF/yK2/BOykuRK32SAaoyD3wAjbD6l/T4Dc+SLK++RvDgHNIc1wDmuabDgdwQeoVLk+B9m8/HaNWdGCB+jjhc6O/JwLg0jl7rWn1XUQF2kaw0O66CSwnzF718VnG5XohCEUIpCECpCaEAhCEAsPjLqx5j/wyPrt/NZqwOO8P9ogfF3joiS1zZWUSxzTYNHmNtx1RK+ePcvJxVcTxcvFs5MDnxj/ABeI0yREeb2e9H9K9VjYuXFKLjka8fskEj4jmFXNRXm/desgUAIPMhK16OC8yECWNx3g8WbBDG+WWF8Ezn0yNr2ThwAo24aHCiL358llpsNckGqZBh8Jx++dGXySPLGPOkzyGt2hx5NAq6Fcr3pcqGT8QnMuPisYS7d7Gu7gP+09zvCXWegs+RO6+gZ0EOSyBuRDHIcdznROeHHRqrUKDtLhYBpwcPTelPaDLyMbGgbh475Zcl7mM7qMuigojUXbVZvYGgOZsWEHzbKgnbJ3c0ZbN9kho1Dcghw2c3nRBI5ro+zHGsTEhfFl4UWS4kuOoRSCQ34Q1/OIgGuVEAm7pqcPZWecPn4jk921tl4L2veGjmQ69DBttV9Nui5TJYxjnNjeZGB1MkLC1z/Lw87/AK25Kj6l2VwuGcVEvdYuVw+aPd3s2RI+Lf7LiKvceHSDv1FrY5HYvMj/ANnyosoDlFlM7mYDy1NsE+pAXzLh/D8oM0tmfjsLi/Sx77LiKshpG9Adeg8l3PYvi+XA10MmTLmOc783FOySZoaByaQTIHE+ukDogWfkSQN0ZmFPjuAjb7QS6XH0MMhDQ5ttBuR2/lS8o5I3i43td90g0vocPFpQ28jDyYByc5rHZMQ+IAD6+DaHmsSXs1w3NHesihNkjv8ACf3Z1DmDooX6EFMHDlqil1GR+T2v0OdkM8hPGydo+mlYh7C5o93Nxn/fhkj/AIFymDT4+U6Nwc00WmwR0KyIMhjbbHEyO3l5ZFGyJheatxawAWaG9ch6LIk7F8UHI4Dx6TztP0Mdfik3szxMGvZYdv1va4g0+o2v8EwPG4Q7NfFDeisjW6QUXRw6Dr+ZpgHrVr6lw/EigjZFCwMjYKDR+JJ6k9SVwfAOF8Wge92jh8YczR+cyJ5TzBvS1oB5ea3rMTiLv0nEIIx9nFwRq/fle7/tWoOnWv4jxXHx67+eKInZrXvaHuPk1vN3yC1f/wAGD+nzM2fza/I7lh+UAZssvDw8aC+5hjYTzcxo1v8Ai/m75koPFvGZJS32XGmczUNU2Ux2NFpB8VB/5wmrohleq3YIPJYD8i+S9cFxOq/T+azY1zWUhNFKNkhNJAJhJCBryyw/Qe7LQ8UWh96HVzaa3APn0XraEGkj45GHNjyA7ElJprZ6EUh/4co8D/hYPosXjHZHCyTrkgDJeftGOTDNfmS33vmCtxmYxc1zdLJY3bOikrceW4o/A/VaI8NZEfzE+RgHpE468U+ndyWwD0Y5quueOfzOxGZHZxM1k7RyizmEP+HeM5n4gLTZntWNftmHLGwc54amgA8y5vu/NfQRn5cVd9jNyGbfnsF3jr7RgkIP7r3FZnD+LY85LYpAZGjxwuDo54/vRPAcPoqj5lj5UcouN7Xj9k7j4jovXSu34r2Owckl5hEcvPv8Y9zKD57bOPxBXO5XY3Niv2eeLKZ9jJuGcDyD2gtcfiApg0rlNrIyMTKjH57Bymebo2DIZ8dURP4gLA9vhJLe8aHDmx50PHxa6ig97XpHkkbHcEjZY5N8jfw3UFB6do8E5uPBFHP3LWzGTJGgufM2vDpPKx9lxAujey9oeF40MTo2R1G5xLtTtT3C7FuPMjavgDtSxmE9DX9fj8F7tojx313JIG3r0+vRA+zfZyXKyHw3TISDLNVhrTu2vNxHIfHyX1rhPCoMVmiCMMH6z+ckh83O5n+HlS0fZbNx4sVrjLEwvcXPLpGN3HhF2fJoWT/a7CJIjnE7hsWYjX5DgfL82DS1IOhtYGRwyFzzIG93MQAZoTokNctVbPAvk4Eeiwm8Ynk/Q4cgHR+W5sDf3Rqf/wAoXm/GyZP02WY29Y8Jgj28jI/U75t0lBicU4jPjSxR6Isnvr7prJWwZRoEm43eF2w94Fo9B19OHcafLJ3b8TMxzoLteRGzuTVbCRriL35ehWVg4WPjau6jDXurXI4ufNJ9+RxLnfMlVKyd5Loe4LRsYpRI1xPmJASB+6VFjILz5/wU6z5BaybKyme9gvPrDMyT+IC1uR2pLPewssf5Yv8AUnoyuidIfT8F5uefMrkMjtzXu4cx+/Ixn8AVrpe2+S73MWJn33ySfw0qejzXe6v6ulJk+fwXAR8dzpDu5rB5RxtH4mz+K6HgmRLduc519SSVPS+XSxY8jv1dI83rYY0Gi97Jqz0XjizkgLMaU1qQIQhFJCaEEoStFoGmkhA0H8PJJCDFdw2Lm0GI87iJYCfMtHhPzCw87gwlAErY5w02zvW6ZWHza9vun4UtshExzXs+TAahmL29MbPJeD6MyB4h/m1r0/tFGyhlxyYjjtqnAdjuP7M7bb9dJ9F0DmgiiAQeYIsFY0mKQDoIojdj92n0v/2rqXl5wZTJG6o3Ne37Ubw5v1H/AJTnDJBUjWyDylYHD6G1z/EOCYIcXy4xxXn/ABGP3kHz7yEgD/NS84uEy1qxeK5JZ074Y+Ywemqg78VdZxsZeznD3m3YWJfm2FjD9QAvB/ZDhh/wrB92edv8HrFbj8Ua5v8AesGVmpuoSYs0by296LXkXV9FvHEf0URqm9j+Gj/CtP3p53D8Xqj2Y4Z1wsZ332Nk/wC61sCR/RXm4f1aaPBvCsFp1DExA77Qx4r+oasz2xrQA0UOgAAAWI+vP+a8JpWtFuOkfacQ0fUpqs1+celfE7/18F5e0OPU/wAgtJLx/GBpssbj+xcn4ix+KzuHSxzHxSOryoBT0YzBN6/Ib0tzwwHQSQRbtr6ikYuJE0AsaD+0dysq1NakUpe0HmAfiAUIRpjS8Ngd70TD/lCxncBxT/umj4LZWi1BrG8BxxyZX0WRHw6NvILLRaCGQgclYCVp2qGkkhA7QkhBKFNotBVoU2naCrRalFoKtO1CEFWi1Np2ga1Wb2cxZXF5iDJP/thJjk+rVtEIOUyOyU4/2fiWUzybM8ygfvWsGTgvF28swP8A/wAsc3/yLubRaiPnU+Pxhv8Avf8Aowf6Vr5zxfrO8fdhg/0L6raksB5gfRDHxyfF4k/38nJ+DZHMH0bSwz2bme7U/W932nkud9Svthx2H9Rv0U+yR/ZCmK+U4PZt4rYrpuHcLe2uey7EYzPshWIwOiYMTBDgBazwVITtUUhSi1RVpJIQO01KLQVaLUoQO0WptFoKtFqbStBFoteYKdoPS0WotO0F2i1FotBdotTaLQVaLU2i0FWnai0Wgu0rU2i0F2i1FotBdotRaLQXaLUWi0F2i1FotBVotTaLQXaLUWi0F2lam0Wgq0WptFoKtFqLRaCrRqUWlaDzBTtQmgu07UJoKtO1NoQVadqLTQVaLUotBVotShBVotShBVotShBVotShBVotShBVotShBVotShBVotShBVotShA7Ram0IKtJJK0DtFpJIP/Z"
                alt=""
                className="product-navigation-item"
              />
            </button>
            <button className="product-navigation">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
                className="product-navigation-item"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="product-new">
        <h2>Sản Phẩm Mới</h2>
        <div className="row">
          {productNew.map((item) => (
            <div key={item.id} className="product-home">
              <img src={item.linkImg} alt="img" className="product-home-img" />
              <p className="product-home-name">{item.name}</p>
              <p className="product-home-price">Giá: {item.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="product-new">
        <h2>Sản Phẩm Bán Chạy</h2>
        <div className="row">
          {productHot.map((item) => (
            <div key={item.id} className="product-home">
              <img src={item.linkImg} alt="img" className="product-home-img" />
              <p className="product-home-name">{item.name}</p>
              <p className="product-home-price">Giá: {item.price},000</p>
            </div>
          ))}
        </div>
      </div>
      <div className="home-contact">
        <hr></hr>
        <p>Địa chỉ: Thanh xuân, Hà Nội </p>
        <p>Hotline: 0123456789</p>
        <p>Zalo: 0123456789</p>
      </div>
    </div>
  );
};
export default Home;
