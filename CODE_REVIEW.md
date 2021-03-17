# Code Review

- Architecture:

  - No user feedback on searches loading or search failures.
  - Unit tests are setup, but don't perform functional tests. `BookSearchComponent` can test store disptaches, but other dumber components would only test rendering which can be accounted for in e2es.
  - Unknown authors and/or publishers are blank in the UI.
  - Indivudal components could be their own modules so `BooksFeatureModule` doesn't have all the material mdoules.
  - Store +state could be split up into it's own subfolder given how large it's becoming. This could allow for easier additions.
  - Returned results - repsonse codes and message - from API calls would be helpful.

- Book Search Component
  - The search form can be its own component
  - The book list can be its own component
  - Using a searchTerm getter is bad for performance. Could hook to the store or simply use `valuChanges` Observable.
  - `line:35` - There shouldn't be a subscription here OR unsubscribe from it in `ngOnDestroy`. :
    1. Convert `books` property to an Observable for the selector `getAllBooks`.
    2. Bind the selector to the new variable and remove the subscription.
    3. Make book list its own component, and bind `books$ | async` to an input.
  - `line:40` - `formatDate` should be a pipe.
  - `DOM line:27` - Combining author names into one string can also be a pipe.
  - `ngFor` should variables like `b.authors` should be legible `book.authors` so future developers don't guess at the context
- Reading List Component
  - `line:15` - `removeFromReadingList` is untyped
  - `DOM line:1` - Could use a selector heard to check if the readinglist exists.
  - `DOM line:9` - Combining author names into one string can also be a pipe.
- Total Count Component
  - `line:10` - remove dead code `OnInit` interface
  - `line:15` - remove dead code `ngOnInit` method
- Accessibility
  - The "Javascript" link doesn't receive focus when tabbing with a keyboard. Should make this a button.
  - Book images don't have alternate text describing them
  - Form elements don't have labels.
  - Search icon button needs an aria label
  - Colours across the site have poor contrast ratios:
    - center text
    - header background
    - sidebar header
