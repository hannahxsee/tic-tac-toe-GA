curl "https://tic-tac-toe-wdi.herokuapp.com/sign-in" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --data '{
  "games": [
    {
      "id": "'"${ID}"'",
      "cells": "'"${CELLS}"'",
      "over": "'"${OVER}"'",
      "player_x": {
        "id": "'"${ID}"'",
        "email": "'"${EMAIL}"'",
      },
      "player_o": "'"${PLAYER}"'",
    },
    {
      "id": "'"${ID}"'",
      "cells": "'"${CELLS}"'",
      "over": "'"${OVER}"'",,
      "player_x": {
        "id": "'"${ID}"'",
        "email": "'"${EMAIL}"'",
      },
      "player_o": "'"${PLAYER}"'",
    }
  ]
}'


echo
