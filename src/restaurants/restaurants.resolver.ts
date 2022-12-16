import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class RestaurantsResolver {
  @Query(() => Boolean) // () means no one. Graphql function.
  isPizzaGood() {
    // Typescript function.
    return true;
  }
}
