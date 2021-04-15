class Movie < ApplicationRecord


    before_create :slugify

    def slugify
        self.slug = title.parmeterize
    end
end
