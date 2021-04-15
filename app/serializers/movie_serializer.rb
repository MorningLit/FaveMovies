class MovieSerializer
  include JSONAPI::Serializer
  attributes :image_url, :title, :popularity, :synopsis, :genre, :language, :duration, :slug
end
