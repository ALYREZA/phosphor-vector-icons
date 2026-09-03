# @phosphor-icons/core-foundation

This package contains the framework-independent foundation data for the Phosphor icon system:

- Font files (`fonts/*.ttf`) for all Phosphor weights
- A stable unicode glyph mapping (`glyphMap`)
- Icon name TypeScript types (`IconName`)
- Basic icon metadata (`iconMetadata`) intended for future filtering/search

It does not render icons. Renderers (React, React Native, etc.) should consume this package’s exports.

## Example

```ts
import { glyphMap, IconName, iconMetadata } from "@phosphor-icons/core-foundation";

glyphMap.user;
iconMetadata.user.tags;
const name: IconName = "user";
```

