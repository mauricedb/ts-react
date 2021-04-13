import faker from 'faker';
import { Movie, Rating, CastType, Posters } from './MovieType';

export class RatingsBuilder {
  private criticsScore: number = faker.datatype.number({ min: 1, max: 100 });
  private audienceScore: number = faker.datatype.number({ min: 1, max: 100 });

  withCriticsScore(criticsScore: number) {
    this.criticsScore = criticsScore;
    return this;
  }

  withAudienceScore(audienceScore: number) {
    this.audienceScore = audienceScore;
    return this;
  }

  build(): Rating {
    return {
      criticsScore: this.criticsScore,
      audienceScore: this.audienceScore,
    };
  }
}

export class PostersBuilder {
  build(): Posters {
    return {
      thumbnail: faker.image.avatar(),
      profile: faker.image.animals(),
      detailed: faker.image.city(),
      original: faker.image.cats(),
    };
  }
}

export class AbridgedCastBuilder {
  build(): CastType {
    return {
      id: faker.datatype.number(),
      name: faker.name.findName(),
      characters: Array.from({ length: faker.datatype.number(3) }).map(() =>
        faker.name.findName()
      ),
    };
  }
}

export class MovieBuilder {
  private title: string = faker.lorem.words(3);
  private ratings = new RatingsBuilder().build();
  private posters = new PostersBuilder().build();

  withTitle(title: string) {
    this.title = title;
    return this;
  }

  withRatings(ratings: Rating) {
    this.ratings = ratings;
    return this;
  }

  build(): Movie {
    return {
      id: faker.datatype.number(),
      title: this.title,
      year: faker.datatype.number({ min: 1900, max: 2019 }),
      mpaaRating: 'R',
      ratings: this.ratings,
      criticsConsensus: faker.lorem.paragraph(),
      synopsis: faker.lorem.paragraph(),
      genres: Array.from({ length: faker.datatype.number(5) }).map(() =>
        faker.lorem.word()
      ),
      posters: this.posters,
      abridgedCast: Array.from({ length: faker.datatype.number(5) }).map(() =>
        new AbridgedCastBuilder().build()
      ),
      abridgedDirectors: Array.from({
        length: faker.datatype.number(3),
      }).map(() => faker.name.findName()),
    };
  }
}
