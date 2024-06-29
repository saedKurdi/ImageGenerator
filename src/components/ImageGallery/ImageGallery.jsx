import React, { useState } from "react";
import { ImageContainer } from "./styles";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import { Loader } from "../Loader/Loader";
import Modal from "../Modal/Modal";
import axios from "axios";
import Button from "../Button/Button";
import Searchbar from "../Searchbar/Searchbar";
export default function ImageGallery() {
  const [hits, setHits] = useState([]);
  const [modal, setModal] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  // Creating function that get hits from api and binds to screen :
  const getHits = async (query) => {
    setQuery(query);
    const url = `https://pixabay.com/api/?key=44666435-88a81f82edfc35b63e66a68d4&q=${query}&image_type=photo&pretty=true&page=${page}`;
    setLoading(true);
    const response = await axios.get(url);
    setLoading(false);
    return response.data.hits;
  };

  // Binding Hits to screen :
  const bindHits = async (query) => {
    const hits = await getHits(query);
    setHits(hits);
  };

  // Creating function that increments page :
  const nextPage = async () => {
    setPage(page + 1);
  };

  const loadMore = async () => {
    setLoading(true);
    await nextPage();
    const newHits = await getHits(query);
    setHits([...hits, ...newHits]);
    setLoading(false);
  };

  return isLoading ? (
    <Loader />
  ) : modal ? (
    <Modal
      imagePath={selectedImage}
      setModal={() => {
        setModal(!modal);
      }}
    />
  ) : (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Searchbar bindHits={bindHits} />
      <ImageContainer>
        {hits.map((hit, index) => {
          return (
            <ImageGalleryItem
              openModal={() => {
                setSelectedImage(hit.largeImageURL);
                setModal(!modal);
              }}
              hit={hit}
              key={index}
            />
          );
        })}
      </ImageContainer>
      <Button loadMore={loadMore} />
    </div>
  );
}
